importScripts("https://js.pusher.com/beams/service-worker.js");

self.addEventListener("push", function(event) {
    const data = event.data.json();
    self.registration.showNotification(data.notification.title, {
        body: data.notification.body,
        icon: "/icon.png"
    });
});
