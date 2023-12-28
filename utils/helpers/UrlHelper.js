// import * as UrlHelper from 'utils/helpers/UrlHelper'

// export function queryString(x, options) {}
// export function requestBody(x, options) {}
// export function slug(x, options) {}
// export function unslug(x, options) {}

export function encode(str, strict = false) {
  if (typeof str === "string") {
    return strict ? encodeURIComponent(str) : encodeURI(str);
  }
}

export function decode(str, strict = false) {
  if (typeof str === "string") {
    return strict ? decodeURIComponent(str) : decodeURI(str);
  }
}

export function mailto(email, options) {
  // hi@x.co
  if (
    typeof email === "string" &&
    email.indexOf("@") > 1 &&
    email.indexOf(".") > 3
  ) {
    let res = options ? `mailto:${email}?` : `mailto:${email}`;
    options &&
      Object.entries(options).map(([k, v]) => {
        res += ["subject", "body"].includes(k)
          ? `${k}=${encode(v, true)}&`
          : `${k}=${encode(v)}&`;
      });
    return res.endsWith("&") ? res.slice(0, -1) : res;
  }
}

export function tel(phone) {
  if (typeof phone === "string") {
    let res = phone.startsWith("0")
      ? "234" + phone.slice(1)
      : phone.startsWith("+")
      ? phone.slice(1)
      : phone;
    return (
      "tel:" +
      res
        .replaceAll(" ", "")
        .replaceAll("(0)", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
    );
  }
}

export function whatsApp(phone, text) {
  if (typeof phone === "string") {
    let res = tel(phone).replace("tel:", "");
    return text
      ? `https://wa.me/${res}?text=${encode(text, true)}`
      : `https://wa.me/${res}`;
  }
}

export function social(app, username) {
  if (typeof app === "string") {
    const apps = {
      dc: "discord.com/users/", //2gbeh#4088
      fb: "facebook.com/",
      "fb+": "facebook.com/", // hwplabs
      fi: "figma.com/@",
      gh: "github.com/",
      ig: "instagram.com/",
      in: "linkedin.com/in/",
      sc: "snapchat.com/add/", // etugbeh92
      tg: "t.me/", // etugbeh
      th: "threads.net/@",
      tk: "tiktok.com/@",
      tw: "twitter.com/",
      yt: "youtube.com/@",
      "yt+": "youtube.com/c/", // emmanueltugbeh2gbeh
    };
    //
    let domain = app in apps ? apps[app] : app;
    return app === "wa"
      ? whatsApp(username) // 2348169960927
      : username
      ? `https://${domain}${username}`
      : `https://${domain}`;
  }
}

export function mySocial(app) {
  const apps = {
    dc: "2gbeh#4088",
    "fb+": "hwplabs",
    sc: "etugbeh92",
    tg: "etugbeh",
    "yt+": "emmanueltugbeh2gbeh",
    wa: "2348169960927",
  };
  return social(app, app in apps ? apps[app] : "2gbeh");
}
