export const useAlertStore = defineStore("alert", () => {
  //data
  const Alerts = ref([  ]);
  const ind = ref(0);
  

  //function
  const Open = (alertObj, duration) => {
    alertObj.status = true;
    setTimeout(() => {
      alertObj.status = false;
      Alerts.value = Alerts.value.filter((a) => a.index != alertObj.index);
    }, duration);
  };

  const doAlert = (alertType, alertTitle, alertMessage, duration = 3000) => {
    ind.value = ind.value + 1;
    let alert = ref({
      index: ind.value,
      type: alertType,
      message: alertMessage,
      title: alertTitle,
      status: true,
    });
    Alerts.value.push(alert.value);
    Open(alert.value, duration);
  };

  return {
    //data
    Alerts,

    //function
    doAlert,
    Open,
  };
});
