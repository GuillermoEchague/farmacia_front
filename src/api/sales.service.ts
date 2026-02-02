export const createSale = async (items: { id: string, quantity: number }[]) => {
  console.log("Creating sale with items:", items);
  await new Promise(resolve => setTimeout(resolve, 600));
  return { success: true, transactionId: "TX-" + Math.random().toString(36).substr(2, 9).toUpperCase() };
};
