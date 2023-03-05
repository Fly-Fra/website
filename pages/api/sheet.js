export default async function asynchandler(req, res) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_SHEET_API + "?action=" + req.body.action, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
  } catch (error) {
    console.error(error);
  }

  res.status(200).send({message:"success"});
}
