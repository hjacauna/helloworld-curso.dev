function status(request, response) {
  response.status(200).json({ chave: "teste api" });
}

export default status;
