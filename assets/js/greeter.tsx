import React from "react";

interface GreeterProps {
    name: string;
}
const Greeter: React.FC<GreeterProps> = (props: GreeterProps) => {
    const name = props.name;
    return (
        <section className="phx-hero">
          <p>Hello World</p>
        </section>
    );
};

export default Greeter;