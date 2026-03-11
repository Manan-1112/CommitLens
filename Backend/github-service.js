const axios = require("axios");

const BASE_URL = "https://api.github.com";

async function getUserRepos(token) {
    const response = await axios.get(`${BASE_URL}/user/repos`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json"
        }
    });
    console.log(`controller me repo data ${response}`)
    return response.data;
}

async function getRepoDetails(owner, repo, token) {
    const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json"
        }
    });

    return response.data;
}

async function getRepoCommits(owner, repo, token) {
    const response = await axios.get(`${BASE_URL}/repos/${owner}/${repo}/commits`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json"
        }
    });

    return response.data;
}

module.exports = {
    getUserRepos,
    getRepoDetails,
    getRepoCommits
};