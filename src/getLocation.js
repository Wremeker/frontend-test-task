export default function getLocation() {
  const getlocation = navigator.geolocation;
  const location = new Promise((resolve, reject) => {
    if (!getlocation) {
      reject(new Error("Error"));
    }
    getlocation.getCurrentPosition(
      position => {
        resolve(position);
      },
      () => {
        reject(new Error("Error"));
      }
    );
  });
  return location;
}
