const utils = {};

const data = {
  professionalName: "John Doe",
  base64Image: "your_base64_encoded_image",
  nameLink: {
    firstName: "John",
    url: "http://example.com",
  },
  primaryDescription: "Primary description",
  workDescription1: "Work description 1",
  workDescription2: "Work description 2",
  linkTitleText: "Link title text",
  linkedInLink: {
    text: "LinkedIn",
    link: "https://linkedin.com",
  },
  githubLink: {
    text: "GitHub",
    link: "https://github.com",
  },
};

utils.getData = (req, res, next) => {
  res.json(data);
};

module.exports = utils;
