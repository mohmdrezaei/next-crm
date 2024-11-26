import Customer from "../../../models/Customer";
import connectDB from "../../../utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
    return;
  }

  if(req.method === "DELETE"){
      const id = req.query.customerId
    try {
        await Customer.deleteOne({_id: id})
        res.status(200).json({status:"success" , message : "Data deleted successfully"})
    } catch (error) {
        console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Error in deleting data in DB",
      });
    }
  }
}