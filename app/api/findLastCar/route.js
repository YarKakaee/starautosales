import prisma from '@/prisma/client';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
	const lastCar = await prisma.car.findFirst({
		orderBy: { stockId: 'desc' },
	});
	const lastCarId = lastCar.stockId;
	return NextResponse.json({ lastCarId });
}
