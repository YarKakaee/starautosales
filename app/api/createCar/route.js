import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/auth/authOptions';

export async function POST(request) {
	const session = await getServerSession(authOptions);

	if (session?.user?.email !== 'starautosalesinfo@gmail.com')
		return NextResponse.json({}, { status: 401 });

	const body = await request.json();

	const newCar = await prisma.car.create({
		data: {
			make: body.make,
			model: body.model,
			price: body.price,
			year: body.year,
			transmission: body.transmission,
			mileage: body.mileage,
			body: body.body,
			seats: body.seats,
			doors: body.doors,
			eColor: body.eColor,
			iColor: body.iColor,
			fuel: body.fuel,
			engine: body.engine,
			vin: body.vin,
			safety: body.safety,
			image1: body.image1,
			image2: body.image2,
			image3: body.image3,
			image4: body.image4,
			image5: body.image5,
			image6: body.image6,
			image7: body.image7,
			image8: body.image8,
			image9: body.image9,
			image10: body.image10,
		},
	});

	return NextResponse.json(newCar, { status: 201 });
}
