import React, { createRef } from "react";
import "./section.css";

interface Props {
  justify?: boolean;
  title?: string;
  text: any;
  img?: string;
  flipped?: boolean;
  className?: string;
}

export default class Section extends React.PureComponent<
  Props,
  { isVisible: boolean }
> {
  domRef: React.RefObject<HTMLElement>;
  constructor(props: any) {
    super(props);
    this.domRef = createRef();
    this.state = { isVisible: false };
  }
  componentDidMount() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.setState({ isVisible: true });
        observer.unobserve(this.domRef.current!);
      }
    });

    observer.observe(this.domRef.current!);

    return () => observer.unobserve(this.domRef.current!);
  }
  render() {
    return (
      <section
        className={
          (this.props.className || "section") +
          (this.props.flipped ? "" : " flip") +
          (this.state.isVisible ? " visible" : "")
        }
        ref={this.domRef}
      >
        <main className="container">
          <div className="text-container">
            <h3 className="text-title">{this.props.title}</h3>
            {this.props.text.map ? (
              this.props.text.map((text: string) => (
                <p className="text" key={Math.random()}>
                  {text}
                </p>
              ))
            ) : (
              <p className="text">{this.props.text}</p>
            )}
          </div>
          <div
            className={
              "image-container" + (this.props.justify ? " justify" : "")
            }
          >
            <img src={this.props.img} alt={""} className="image" />
          </div>
        </main>
      </section>
    );
  }
}
