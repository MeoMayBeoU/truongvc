import React from "react";
export default function About() {
  return (
    <div>
      <div class="card-box">
        <ul class="nav nav-pills navtab-bg">
          <li class="nav-item">
            <a
              href="#about-me"
              data-toggle="tab"
              aria-expanded="true"
              class="nav-link ml-0 active"
            >
              <i class="mdi mdi-face-profile mr-1"></i>About Me
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#settings"
              data-toggle="tab"
              aria-expanded="false"
              class="nav-link"
            >
              <i class="mdi mdi-settings-outline mr-1"></i>Settings
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane show active" id="about-me">
            <h5 class="mb-4 text-uppercase">
              <i class="mdi mdi-briefcase mr-1"></i>
              Experience
            </h5>

            <ul class="list-unstyled timeline-sm">
              <li class="timeline-sm-item">
                <span class="timeline-sm-date">2015 - 19</span>
                <h5 class="mt-0 mb-1">Lead designer / Developer</h5>
                <p>websitename.com</p>
                <p class="text-muted mt-2">
                  Everyone realizes why a new common language would be
                  desirable: one could refuse to pay expensive translators. To
                  achieve this, it would be necessary to have uniform grammar,
                  pronunciation and more common words.
                </p>
              </li>
              <li class="timeline-sm-item">
                <span class="timeline-sm-date">2012 - 15</span>
                <h5 class="mt-0 mb-1">Senior Graphic Designer</h5>
                <p>Software Inc.</p>
                <p class="text-muted mt-2">
                  If several languages coalesce, the grammar of the resulting
                  language is more simple and regular than that of the
                  individual languages. The new common language will be more
                  simple and regular than the existing European languages.
                </p>
              </li>
              <li class="timeline-sm-item">
                <span class="timeline-sm-date">2010 - 12</span>
                <h5 class="mt-0 mb-1">Graphic Designer</h5>
                <p>Coderthemes LLP</p>
                <p class="text-muted mt-2 mb-0">
                  The European languages are members of the same family. Their
                  separate existence is a myth. For science music sport etc,
                  Europe uses the same vocabulary. The languages only differ in
                  their grammar their pronunciation.
                </p>
              </li>
            </ul>

            <h5 class="mb-3 mt-4 text-uppercase">
              <i class="mdi mdi-cards-variant mr-1"></i>
              Projects
            </h5>
            <div class="table-responsive">
              <table class="table table-borderless mb-0">
                <thead class="thead-light">
                  <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Start Date</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Clients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>App design and development</td>
                    <td>01/01/2015</td>
                    <td>10/15/2018</td>
                    <td>
                      <span class="badge badge-info">Work in Progress</span>
                    </td>
                    <td>Halette Boivin</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Coffee detail page - Main Page</td>
                    <td>21/07/2016</td>
                    <td>12/05/2018</td>
                    <td>
                      <span class="badge badge-success">Pending</span>
                    </td>
                    <td>Durandana Jolicoeur</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Poster illustation design</td>
                    <td>18/03/2018</td>
                    <td>28/09/2018</td>
                    <td>
                      <span class="badge badge-pink">Done</span>
                    </td>
                    <td>Lucas Sabourin</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Drinking bottle graphics</td>
                    <td>02/10/2017</td>
                    <td>07/05/2018</td>
                    <td>
                      <span class="badge badge-purple">Work in Progress</span>
                    </td>
                    <td>Donatien Brunelle</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Landing page design - Home</td>
                    <td>17/01/2017</td>
                    <td>25/05/2021</td>
                    <td>
                      <span class="badge badge-warning">Coming soon</span>
                    </td>
                    <td>Karel Auberjo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="settings">
						<form>
							<h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-account-circle mr-1"></i> Personal Info</h5>
							
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="firstname">First Name</label>
										<input type="text" class="form-control" id="firstname" placeholder="Enter first name"></input>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="lastname">Last Name</label>
										<input type="text" class="form-control" id="lastname" placeholder="Enter last name"></input>
									</div>
								</div> 
							</div> 

							<div class="row">
								<div class="col-12">
									<div class="form-group">
										<label for="userbio">Bio</label>
										<textarea class="form-control" id="userbio" rows="4" placeholder="Write something..."></textarea>
									</div>
								</div> 
							</div>

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="useremail">Email Address</label>
										<input type="email" class="form-control" id="useremail" placeholder="Enter email"></input>
										<span class="form-text text-muted"><small>If you want to change email please <a href="javascript: void(0);">click</a> here.</small></span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="userpassword">Password</label>
										<input type="password" class="form-control" id="userpassword" placeholder="Enter password"></input>
										<span class="form-text text-muted"><small>If you want to change password please <a href="javascript: void(0);">click</a> here.</small></span>
									</div>
								</div> 
							</div> 

							<h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-office-building mr-1"></i> Company Info</h5>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="companyname">Company Name</label>
										<input type="text" class="form-control" id="companyname" placeholder="Enter company name"></input>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="cwebsite">Website</label>
										<input type="text" class="form-control" id="cwebsite" placeholder="Enter website url"></input>
									</div>
								</div> 
							</div> 

							<h5 class="mb-3 text-uppercase bg-light p-2"><i class="mdi mdi-earth mr-1"></i> Social</h5>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="social-fb">Facebook</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fab fa-facebook-square"></i></span>
											</div>
											<input type="text" class="form-control" id="social-fb" placeholder="Url"></input>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="social-tw">Twitter</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fab fa-twitter"></i></span>
											</div>
											<input type="text" class="form-control" id="social-tw" placeholder="Username"></input>
										</div>
									</div>
								</div>
							</div> 

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="social-insta">Instagram</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fab fa-instagram"></i></span>
											</div>
											<input type="text" class="form-control" id="social-insta" placeholder="Url"></input>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="social-lin">Linkedin</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fab fa-linkedin"></i></span>
											</div>
											<input type="text" class="form-control" id="social-lin" placeholder="Url"></input>
										</div>
									</div>
								</div> 
							</div> 

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="social-sky">Skype</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fab fa-skype"></i></span>
											</div>
											<input type="text" class="form-control" id="social-sky" placeholder="@username"></input>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="social-gh">Github</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fab fa-github"></i></span>
											</div>
											<input type="text" class="form-control" id="social-gh" placeholder="Username"></input>
										</div>
									</div>
								</div>
							
							<div class="text-right">
								<button type="submit" class="btn btn-success waves-effect waves-light mt-2"><i class="mdi mdi-content-save"></i> Save</button>
							</div>
                            </div>
						</form>
					</div>

    </div>
  );
}
