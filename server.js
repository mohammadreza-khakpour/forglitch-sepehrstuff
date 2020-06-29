const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const news = JSON.parse(fs.readFileSync(`${__dirname}/news.json`));
const newsfa = JSON.parse(fs.readFileSync(`${__dirname}/newsfa.json`));
const bannerfa = JSON.parse(fs.readFileSync(`${__dirname}/bannerfa.json`));
const banner = JSON.parse(fs.readFileSync(`${__dirname}/banner.json`));
const videofa = JSON.parse(fs.readFileSync(`${__dirname}/videofa.json`));
const video = JSON.parse(fs.readFileSync(`${__dirname}/video.json`));

app.get(`/api/v1/news`, (req, res) => {
    res.status(200).json(news);
});
app.get(`/api/v1/newsfa`, (req, res) => {
    res.status(200).json(newsfa);
});

app.get(`/api/v1/bannerfa`, (req, res) => {
    res.status(200).json(bannerfa);
});
app.get(`/api/v1/banner`, (req, res) => {
    res.status(200).json(banner);
});

app.get(`/api/v1/videofa`, (req, res) => {
    res.status(200).json(videofa);
});
app.get(`/api/v1/video`, (req, res) => {
    res.status(200).json(video);
});


app.get(`/`,(req,res)=>{
    res.status(200).json({
        status: `success`,
        results: news.length,
        data: { news }
    });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});