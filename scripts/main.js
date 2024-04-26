// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {

  function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
  
    return age;
  }
const aboutText = `a resident of Bandung. Born on September 27, 2005, I am currently ${calculateAge('2005-09-27')} years old. My passion lies in coding/programming, with expertise spanning various domains including web development, system applications, console applications, and bot development. Alongside my technical proficiency, I possess additional skills in project management, problem-solving, and effective communication. In my leisure time, I indulge in pursuits such as learning new program language, reading, and outdoor activities, fostering a well-rounded approach to both professional and personal endeavors.`;
document.getElementById("aboutText").textContent = aboutText;

// Data informasi dasar
const basicInfo = {
  ageLabel: "Age:",
  age: calculateAge('2005-09-27'),
  emailLabel: "Email:",
  email: "cann.me33@gmail.com",
  phoneLabel: "Phone:",
  phone: "+6283132317324",
  addressLabel: "Address:",
  address: "Citalem, Cipongkor, Bandung Barat, Jawa Barat",
  languageLabel: "Language:",
  language: "Sundanese, English novice"
};

// Memasukkan data informasi dasar ke dalam elemen HTML
document.getElementById("ageLabel").textContent = basicInfo.ageLabel;
document.getElementById("age").textContent = basicInfo.age + " years old";
document.getElementById("emailLabel").textContent = basicInfo.emailLabel;
document.getElementById("email").textContent = basicInfo.email;
document.getElementById("phoneLabel").textContent = basicInfo.phoneLabel;
document.getElementById("phone").textContent = basicInfo.phone;
document.getElementById("addressLabel").textContent = basicInfo.addressLabel;
document.getElementById("address").textContent = basicInfo.address;
document.getElementById("languageLabel").textContent = basicInfo.languageLabel;
document.getElementById("language").textContent = basicInfo.language;

const SchoolInfo = `At W3Schools, I immersed myself in the essentials of web development, focusing on HTML, CSS, and JavaScript. Starting from foundational concepts, I progressively advanced my skills in crafting responsive and interactive web interfaces. Through practical projects and guided exercises, I gained hands-on experience in structuring layouts, applying styles, and implementing dynamic functionalities. This comprehensive learning journey not only enhanced my technical proficiency but also fueled my passion for creating engaging web experiences.`;
document.getElementById("schoolText").textContent = SchoolInfo;
const SchoolInfo2 = `Continuing my programming adventure, I took a paid course on Udemy that focused on Python programming from basic to advanced level. This course covers a wide range of topics from basic Python concepts to advanced techniques such as web scraping, object-oriented programming (OOP), MySQL usage, and other topics. I also took the Python for Data Science and Machine Learning Bootcamp course, which broadened my horizons in using libraries like NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, and even machine learning and TensorFlow.`;
document.getElementById("schoolText2").textContent = SchoolInfo2;
const SchoolInfo3 = `Apart from taking online courses, I am also actively self-taught to improve my skills in Python programming. I explored various Python libraries and modules and explored more advanced concepts in this programming language. I understand the use of NumPy, Pandas, and Matplotlib through data analysis projects such as "Twitter Sentiment Analysis with Python". Additionally, I applied my knowledge in building web applications using Django and Flask, such as “Online Store Management System” and “Personal Notes Application”. I also understand basic concepts in machine learning and deep learning through projects such as "House Price Prediction with Linear Regression" and "Image Classification with Convolutional Neural Networks (CNN)". Additionally, I have created various web applications`;
document.getElementById("schoolText3").textContent = SchoolInfo3;

const today = new Date();
const graduationDate = new Date('2024-06-10');

if (today >= graduationDate) {
    const SchoolInfo4 = `In 2021, I started a non-formal education program equivalent to junior high school which lasts for three years. This option allows me to maintain a balance between academic commitments and other responsibilities, as classes are held only once a month.

I successfully graduated on June 10, 2024. This achievement marks an important milestone in my educational journey.`;

    document.getElementById("schoolText4").textContent = SchoolInfo4;
} else {
    const SchoolInfo4 = `In 2021, I embarked on a non-formal educational journey at an institution comparable to junior high school, with a program spanning three years. This decision allowed me to balance academic pursuits with other responsibilities, as classes convened only once a month. As of now, I continue my studies at the institution, yet to complete my education. I will graduating in 2024 10 June, equipped with the knowledge and skills cultivated throughout this unique learning experience.`;

    document.getElementById("schoolText4").textContent = SchoolInfo4;
}

AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

