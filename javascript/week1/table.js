const tablecol = document.querySelectorAll('.teacher-cell');
tablecol.forEach(cell => {
    cell.addEventListener('click', function () {
        const celltext = cell.textContent.toLowerCase().trim(); 

        for (let i = 0; i < subjects.length; i++) {
            if (celltext === subjects[i].subject.toLowerCase().trim()) { 
                localStorage.setItem("teacherData", JSON.stringify(subjects[i])); 
                break;
            }
        }
        window.location.href = "teacher-detail.html"; 
    });
});


function techerDetails() {
    const teacherData = JSON.parse(localStorage.getItem("teacherData")); 
    if (teacherData) {
        const imageUrl = document.querySelector(".teacher-image");
        imageUrl.src = teacherData.imageurl;

        const Name = document.querySelector(".teacher-name");
        Name.textContent = "Name: " + teacherData.name; 

        const Subject = document.querySelector(".teacher-subject");
        Subject.textContent = "Subject: " + teacherData.subject; 

        const Experience = document.querySelector('.teacher-experience');
        Experience.textContent = "Experience: " + teacherData.experience; 

        const Mail = document.querySelector(".teacher-mail");
        Mail.querySelector('span').textContent = teacherData.mail; 

        const Phone = document.querySelector(".teacher-phone");
        Phone.querySelector('span').textContent = teacherData.phone;
    }
}


const Science = {
    imageurl: "https://media.istockphoto.com/id/1314904268/photo/happy-smiling-ethnical-indian-businessman-having-online-virtual-meeting-call-on-laptop.jpg?s=612x612&w=0&k=20&c=Q57DRgHXXu1Y-ke09LrfrFZs-XStTcGK5CJrOQKk-yg=",
    name: "Dr. Ramesh Gopal",
    subject: "Science",
    experience: "25 years of experience",
    mail: "ramesh@gmail.com",
    phone: "9876543210"
};

const Maths = {
    imageurl: "https://media.istockphoto.com/id/97105324/photo/a-black-man-teaching-math-at-a-chalkboard.jpg?s=612x612&w=0&k=20&c=_SGKHpE1Sa2fn3fdfUZwNQPWN0PMIxkppd-F17MIRLw=",
    name: "Dr. Sudhir Kumar",
    subject: "Maths",
    experience: "30 years of experience",
    mail: "sudhir@gmail.com",
    phone: "9876543211"
};

const English = {
    imageurl: "https://media.istockphoto.com/id/1492356435/photo/portrait-of-happy-satisfied-african-american-student-with-curly-hair-guy-with-books-and.jpg?s=612x612&w=0&k=20&c=Q-EFfwxEg1WYLc_GcVxLekUbjJCZKbZO05MUYlmCRA8=",
    name: "Dr. Prakash Kishore",
    subject: "English",
    experience: "20 years of experience",
    mail: "prakash@gmail.com",
    phone: "9876543212"
};

const Hindi = {
    imageurl: "https://media.istockphoto.com/id/1005817830/photo/middle-aged-man-shows-warning-sign.jpg?s=612x612&w=0&k=20&c=Bacai8WcpWkaQFepOqzngFo3J6rCyhcZJnRlLlCUzDU=",
    name: "Dr. Sumanth Kumar",
    subject: "Hindi",
    experience: "28 years of experience",
    mail: "sumanth@gmail.com",
    phone: "9876543213"
};

const Social = {
    imageurl: "https://media.istockphoto.com/id/1156472980/photo/mid-adult-hispanic-school-counselor-smiles-for-camera.jpg?s=612x612&w=0&k=20&c=vtrMfL-niD7w5RZLDh5sul1P2j1GfgS7-wS6R5ULwHU=",
    name: "Dr. Akshay yadav",
    subject: "Social",
    experience: "25 years of experience",
    mail: "sudhir@gmail.com",
    phone: "9876543214"
};


const Art = {
    imageurl: "https://media.istockphoto.com/id/1414062398/photo/happy-arabic-indian-young-business-man-working-watching-webinar-on-laptop.jpg?s=612x612&w=0&k=20&c=MwsMHWRQyc8OHehcR-UFA9O-CUmAxDUjlXBPg24zW-g=",
    name: "Dr. Prakash sharma",
    subject: "Art",
    experience: "20 years of experience",
    mail: "prakash@gmail.com",
    phone: "9876543215"
};

const Projects = { 
    imageurl: "https://media.istockphoto.com/id/2160439329/photo/happy-multiethnic-male-teacher-smiling-at-primary-school.jpg?s=612x612&w=0&k=20&c=0-Lem0EucN1GIoZduYU0rPXUZuGuquTgz_nPXuR-210=",
    name: "Dr. Sumanth Kumar",
    subject: "Projects",
    experience: "28 years of experience",
    mail: "sumanth@gmail.com",
    phone: "9876543216"
};
const Sports = {
    imageurl: "https://media.istockphoto.com/id/1148232025/photo/teacher-raising-trophy-and-giving-speech.jpg?s=612x612&w=0&k=20&c=ifmQew4_cQ8ghzmsc6rg-y1yXJq0q1esayo64k_WsSI=",
    name: "Dr. janak dube",
    subject: "Sports",
    experience: "22 years of experience",
    mail: "janak@gmail.com",
    phone: "9776543214"
};


const subjects = [Science, Maths, English, Hindi, Social, Art, Projects,Sports];




document.addEventListener('DOMContentLoaded', techerDetails);

const backBtn=document.querySelector('.back-btn')

backBtn.addEventListener('click', function(){
    localStorage.removeItem("teacherData");
    window.location.href="Table.html";
})