const homeController = {};

// Display message on home page
homeController.DisplayMessage = (req, res) => {
  res.send("Welcome to the home page!");
};

module.exports = homeController;
