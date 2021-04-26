import React, { useEffect, useState } from 'react';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import { Card, CardBody, Container, Row, Col, Button, FormGroup, Label, Input, NavLink } from 'reactstrap';

const InputForm = (props) => {
    const { name, text, type, set } = props;

    return (
        <Col>
            <FormGroup>
                <Label className="font-profile-head">
                    {text}
                    <Input
                        type={type}
                        name={name}
                        onChange={e => set(e.target.value)}
                        required
                    />
                </Label>
            </FormGroup>
        </Col>
    );
}

const Profile = (props) => {
    const history = useHistory();
    const { username, hash } = useParams();
    const [msg, setMsg] = useState(null);
    const names = ["github", "intra"];
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const handleOauth = (e) => {
        if (names.includes(e.target.name)) {
            window.open(`http://localhost:5000/api/auth/${e.target.name}`, "_self");
        }
    }

    const submit = () => {  };

    if (username && hash) {
        const data = {
            username: username,
            hash: hash
        };

    }

    return (
        <section className="login">
            <Container>
                <Row>
                    <Col md={6} className="m-auto">
                        <Card className="mb-4 shadow-sm">
                            <CardBody>
                                <InputForm name="Login" text="Логин" type="text" set={setLogin} />
                                <InputForm name="Password" text="Почта" type="email" set={setPassword} />
                                <InputForm name="Password" text="Фамилия" type="text" set={setPassword} />
                                <InputForm name="Password" text="Имя" type="text" set={setPassword} />
                                <InputForm name="Password" text="Телефон" type="tel" set={setPassword} />
                                <InputForm name="Password" text="Новый пароль" type="password" set={setPassword} />

                                <Col>
                                    <Button className="login-btn" onClick={submit}>Редактировать</Button>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Profile;