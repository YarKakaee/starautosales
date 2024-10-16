import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export async function GET({ params }) {
	const listingId = parseInt(params.listingId, 10); // Ensure the listingId is an integer

	// Find the car using the listingId
	const car = await prisma.car.findUnique({
		where: { listingId },
	});

	if (car) {
		return NextResponse.json(car);
	} else {
		return NextResponse.json({ error: 'Car not found' }, { status: 404 });
	}
}
