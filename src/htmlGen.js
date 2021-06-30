
function listEngineer(engineers) {

    `<li><a href="#engineer-${index}" class="ps-1 pe-4 py-1">${engineer}</a></li>`
}

function listInterns(interns) {

    `<li><a href="#intern-${index}" class="ps-1 pe-4 py-1">${intern}</a></li>
    `
}

function engineersCards(engineers) {

    `
                                        <div class="col-12 col-md-6 col-lg-4 pb-2">
                                            <div class="card" id="engineer-0">
                                                <div class="card-body">
                                                    <h5 class="card-title text-center">Name Of Engineer</h5>
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">ID: 6546546546</li>
                                                        <li class="list-group-item"><a href="mailto:rymaster.cs@gmail.com" target="_blank">Email: rymaster.cs@gmail.com</a></li>
                                                        <li class="list-group-item"><a href="https://github.com/ryma1738" target="_blank">Github: ryma1738</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
    `
}

function internsCards(interns) {

    `
                                        <div class="col-12 col-md-6 col-lg-4 pb-2">
                                            <div class="card" id="intern-0">
                                                <div class="card-body">
                                                    <h5 class="card-title text-center">Name Of Intern</h5>
                                                    <ul class="list-group list-group-flush">
                                                        <li class="list-group-item">ID: 6546546546</li>
                                                        <li class="list-group-item"><a href="mailto:rymaster.cs@gmail.com" target="_blank">Email: rymaster.cs@gmail.com</a></li>
                                                        <li class="list-group-item">School: UVU</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
    `
}

function createHTML(company, teamLead, engineers, interns) {

    return`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./assets/css/styles.css" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" 
            crossorigin="anonymous" />
            <title>Employee Directory</title>
        </head>
        <body>
            <header class="container-fluid">
                <div class="row py-2" style="height: 100%;">
                    <div class="col-4 d-flex justify-content-center align-items-center">
                        <div class="my-auto header-box">
                            <h1 class="text-center py-1 px-4">
                                ${company}
                            </h1>
                        </div>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-6 d-flex align-items-end justify-content-end">
                        <div class="header-box">
                            <h2 class="text-center px-3 px-1">
                               ${teamLead.name}'s Team Directory
                            </h2>
                        </div>
                    </div>
                </div>
            </header>
    
            <main class="container-fluid">
                <div class="row" style="height: 95vh">
                    <nav class="col-3 m-0 p-2">
                        <div style="width: 100%;">
                            <div class="navbar-list">
                                <h4><a href="#team-lead">Team Lead:</a></h4>
                                <ul>
                                    <li><a href="#team-lead" class="ps-1 pe-4 py-1">${teamLead.name}</a></li>
                                </ul>
                            </div>
                            <div class="navbar-list">
                                <h4><a href="#engineers">Engineers:</a></h4>
                                <ul>
                                    ${listEngineer(engineers)}
                                </ul>
                            </div>
                            <div class="navbar-list">
                                <h4><a href="#interns">Interns:</a></h4>
                                <ul>
                                    ${listInterns(interns)}
                                </ul>
                            </div>
                        </div>
                    </nav>
    
                    <div class="col-9">
                        <div class="row">
                            <div class="col-12">
                                <section>
                                    <div class="section-title p-2" id="team-lead">
                                        <h4>Team Lead: ${teamLead.name}</h4>
                                    </div>
                                    <div>
                                        <div class="row mx-2 my-1">
                                            <div class="col-12 col-md-6 col-lg-4">
                                                <h5 class="text-center">Employee id: ${teamLead.id}</h5>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-4">  
                                                <h5 class="text-center"><a href="mailto:${teamLead.email}" target="_blank">Email: ${teamLead.email}</a></h5>
                                            </div>
                                            <div class="col-12 col-md-6 col-lg-4">    
                                                <h5 class="text-center"><a href="tel:${teamLead.officeNumber}">Office #: ${teamLead.officeNumber}</a></h5>  
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
    
                        <div class="row">
                            <div class="col-12">
                                <section>
                                    <div class="section-title p-2" id="engineers">
                                        <h4>Software Engineers:</h4>
                                    </div>
                                    <div class="row px-4 pt-2">
    
                                        ${engineersCards(engineers)}
    
                                    </div> 
                                </section>
                            </div>
                        </div>
    
                        <div class="row">
                            <div class="col-12">
                                <section>
                                    <div class="section-title p-2" id="interns">
                                        <h4>Interns:</h4>
                                    </div>
                                    <div class="row px-4 pt-2">

                                        ${internsCards(interns)}
    
                                    </div> 
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </body>
    </html>
    `
}

module.exports = createHTML;