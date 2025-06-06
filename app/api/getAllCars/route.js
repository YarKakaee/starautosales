import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
	const allCars = await prisma.car.findMany();

	return new NextResponse(JSON.stringify({ cars: allCars }), {
		headers: {
			'Cache-Control': 'no-store', // Disable caching
		},
	});
}
