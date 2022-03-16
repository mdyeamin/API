// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও

const askAny = confirm('Do you want to see the location of your website?')

if (askAny === true) {

    console.log(location.href);
}
else if (askAny === false) {
    console.log('N/a');
}