function FooterList() {
  const h5Style = {
    fontSize: "1.5rem",
  };
  return (
      <div className="row">
        <div className="col-12 col-md"></div>
        <div className="col-6 col-md">
          <h5 style={h5Style}>
            <b>Information</b>
          </h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                classes
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5 style={h5Style}>
            <b>Helpful Links</b>
          </h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Supports
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Terms & Condition
              </a>
            </li>
            <li>
              <a className="link-secondary text-decoration-none" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default FooterList;
