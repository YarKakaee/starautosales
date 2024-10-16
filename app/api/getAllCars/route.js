import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export async function GET() {
	const allCars = await prisma.car.findMany();
	return NextResponse.json({ cars: allCars });
}
