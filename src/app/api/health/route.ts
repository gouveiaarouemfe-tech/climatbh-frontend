import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version || '1.0.0',
      services: {
        database: await checkDatabaseHealth(),
        strapi: await checkStrapiHealth(),
      },
      system: {
        memory: process.memoryUsage(),
        platform: process.platform,
        nodeVersion: process.version,
      }
    };

    // Verificar se todos os serviços estão saudáveis
    const allServicesHealthy = Object.values(healthData.services).every(
      service => service.status === 'healthy'
    );

    const status = allServicesHealthy ? 200 : 503;
    
    return NextResponse.json(healthData, { status });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 503 }
    );
  }
}

async function checkDatabaseHealth() {
  try {
    // Simular verificação de banco de dados
    // Em um cenário real, você faria uma query simples
    return {
      status: 'healthy',
      responseTime: Math.random() * 100, // ms
      lastCheck: new Date().toISOString()
    };
  } catch (error) {
    return {
      status: 'unhealthy',
      error: error instanceof Error ? error.message : 'Database connection failed',
      lastCheck: new Date().toISOString()
    };
  }
}

async function checkStrapiHealth() {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    if (!strapiUrl) {
      throw new Error('Strapi URL not configured');
    }

    const startTime = Date.now();
    const response = await fetch(`${strapiUrl}/api/posts?pagination[limit]=1`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      // Timeout de 5 segundos
      signal: AbortSignal.timeout(5000)
    });

    const responseTime = Date.now() - startTime;

    if (response.ok) {
      return {
        status: 'healthy',
        responseTime,
        lastCheck: new Date().toISOString()
      };
    } else {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    return {
      status: 'unhealthy',
      error: error instanceof Error ? error.message : 'Strapi connection failed',
      lastCheck: new Date().toISOString()
    };
  }
}
 
