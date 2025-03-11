"use server";

import Order from "@/models/Order";
import connect from "./database";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const PaymentMethod = async (body) => {
  try {
    // Validate body data
    if (!body.title || !body.price) {
      throw new Error("Title and price are required.");
    }

    // Connect to the database
    await connect();

    // Create a new order in the database
    const newOrder = await Order.create(body);

    // Transform order data for Stripe
    const transformedItem = [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: body.title,
          },
          unit_amount: body.price * 100,
        },
        quantity: 1,
      },
    ];

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: transformedItem,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/success/${newOrder._id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/cancel`,
    });

    if (!session) {
      throw new Error("Failed to create Stripe session.");
    }

    return session.url;

  } catch (error) {
    console.error("Error creating payment session:", error);
    return { error: error.message };
  }
};
