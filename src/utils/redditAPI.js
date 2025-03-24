// import fetch from "node-fetch"; 


// API call to get Reddit Access Token

export const getRedditAccessToken = async () => {

    const clientId = process.env.REACT_APP_REDDIT_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_REDDIT_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        console.error('Missing Reddit API credentials in .env file');
        return null;
    }

    const auth = btoa(`${clientId}:${clientSecret}`)
    const tokenUrl = 'https://www.reddit.com/api/v1/access_token';

    try {

        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${auth}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'client_credentials'
            })
        });

        if(!response.ok){
            throw new Error(`Failed to fetch token: ${response.statusText}`)
        }

        const data = await response.json();
        const accessToken = data.access_token;

        console.log(`Access Token: ${accessToken}`);
        return (accessToken)

    } catch (error) {
        console.error('Error getting access token:' + error);
        return (null);
    }
};

//API call to get top 10 posts for each subreddit

export const getBestPosts = async (subreddit) => {
    const accessToken = await getRedditAccessToken();
    const postUrl = `https://oauth.reddit.com/r/${subreddit}/best?limit=10`

    try {
        const response = await fetch(postUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if(!response.ok){
            throw new Error(`Failed to fetch posts`)
        }

        const data = await response.json();
        return data.data.children; 

    } catch (error) {
        console.error('Error getting posts:' + error);
        return (null);
    }

};


// API call to get top 10 comments for each post

export const getPostComments = async (subreddit, postId) => {
    const accessToken = await getRedditAccessToken();
    const commentsUrl = `https://oauth.reddit.com/r/${subreddit}/comments/${postId}?limit=10&depth=1`

    try {

        const response = await fetch(commentsUrl, {
            method: 'GET',
            headers: {
                'Authorization' : `Bearer ${accessToken}`,
            },
        });

        if(!response.ok){
            throw new Error(`Failed to fetch post comments tree`)
        }

        const data = await response.json();
        return data[1].data.children;         
        
    } catch (error) {
        console.error('Error getting post comments tree:' + error);
        return (null);
    }
};


