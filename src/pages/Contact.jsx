// Render the contactt page

export default function Contact() {
  return (
    <div class="container">
      <div class="row g-5">
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Contact me</h4>
          <form class="needs-validation" novalidate="">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="" />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="" />
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
              <div class="col-12">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                <div class="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div class="col-12">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
            </div>

            <hr class="my-4" />


            <button class="w-100 btn btn-primary btn-lg" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}