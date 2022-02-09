const initNotifications = async () => {
  const result = await Notification.requestPermission();
  if (result === "denied") return false;
  if (result === "granted") return true;
};

export default initNotifications;
