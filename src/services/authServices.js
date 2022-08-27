export const isAuthValid = () =>{
    const token = localStorage.getItem("token");
    
    if(!token) return false;
    const payload = token.split('.')[1];
    const payloadJson = JSON.parse(window.atob(payload));
    const now = new Date();
    if(now/1000 < payloadJson.exp) return true
    return false
}