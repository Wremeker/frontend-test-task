export default function getLocation() {
    const getlocation = navigator.geolocation;
    const location = new Promise((resolve, reject) => {
        if (!getlocation) {
            reject(new Error('Не поддерживается'));
        }
        getlocation.getCurrentPosition((position) => {
            resolve(position)
        }, () => {
            reject(new Error('Не поддерживает'))
        });
    });

    
    return   location
    
};