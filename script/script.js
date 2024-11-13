const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


// stampa le card dei membri del team
for (let i = 0; i < teamMembers.length; i++) {
  const teamMember = teamMembers[i];
  const card = `<div class="col-4">
                    <div class="card rounded-0 text-bg-dark mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${teamMember.img}" class="img-fluid" alt="profile-img">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${teamMember.name}</h5>
                                    <p class="card-text">${teamMember.role}</p>
                                    <a class="card-text"><small class="text-body-primary">${teamMember.email}</small></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
                
  // aggiungi la card alla riga
  document.querySelector(".row").innerHTML += card;
}






/* <div class="col-4">
    <div class="card rounded-0 text-bg-dark mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="" class="img-fluid" alt="profile-img">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"></p>
                    <a class="card-text"><small class="text-body-primary">Last updated 3 mins ago</small></a>
                </div>
            </div>
        </div>
    </div>
</div> */