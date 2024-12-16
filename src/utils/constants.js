
export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: 'Bearer '  + process.env.REACT_APP_TMBD_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_small.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];

export const OPENAI_API_KEY1 = process.env.REACT_APP_OPENAI_API_KEY;

