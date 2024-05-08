import axios from "axios";

interface Props {
  form_name: string;
  name: string;
  phone: string;
}

const sendFormDataUrl = "https://contacts.numakids.uz/numakids/submit-form";

export async function sendMessage(data: Props) {
  const search = window.location.search.substring(1);
  const invite = localStorage.getItem("invite");
  const fromSlug = localStorage.getItem("fromSlug");
  console.log(data);
  const params = search
    ? JSON.parse(
        '{"' +
          decodeURI(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
          '"}'
      )
    : "";

  const { utm_campaign } = params;

  let _utm_campaign = "";

  if (utm_campaign) {
    if (invite && utm_campaign === invite) {
      _utm_campaign = "";
    } else {
      _utm_campaign = utm_campaign;
      localStorage.setItem("invite", utm_campaign);
    }
  } else if (fromSlug) {
    if (invite && fromSlug === invite) {
      _utm_campaign = "";
    } else {
      localStorage.setItem("invite", fromSlug);
      _utm_campaign = fromSlug;
    }
  }

  return await axios.post(sendFormDataUrl, {
    ...data,
    ...params,
    utm_campaign: _utm_campaign,
  });
}
