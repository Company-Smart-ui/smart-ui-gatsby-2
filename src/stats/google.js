export const sendMetric = ({ event, type_action }) => {
  const values = {};

  if (typeof event !== "undefined") {
    values["event"] = event;
  }
  if (typeof type_action !== "undefined") {
    values["type_action"] = type_action;
  }

  window.dataLayer.push({ ...values });
};

export const sendFormForTagManager = (title) => {
  const config = {
    event: "gtm.formSubmit",
    type_action: `${title.toUpperCase()} FORM`,
  };

  sendMetric({ ...config });
};
