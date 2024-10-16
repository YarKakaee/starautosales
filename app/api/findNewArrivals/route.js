import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
	const newArrivalCars = await prisma.car.findMany({
		orderBy: { stockId: 'desc' },
		take: 4, // Limit the results to the last 4 cars
	});

	return new NextResponse(JSON.stringify({ cars: newArrivalCars }), {
		headers: {
			'Cache-Control': 'no-store', // Disable caching
		},
	});
}
