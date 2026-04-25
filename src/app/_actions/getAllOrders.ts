import { OrderType } from "@/types/orders";
import { getUserId, getUserToken } from "./getDecodedToken";

export async function getAllOrders() {
  const userId = await getUserId();
  try {
    const token = await getUserToken();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/orders/user/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: token as string,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }

    const data = await response.json();
    console.log(data);
    return {
      success: true,
      data: data as OrderType[],
      message: data.message || "",
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      message: error instanceof Error ? error.message : "An error occurred",
    };
  }
}
