import { useMutation } from "@tanstack/react-query";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { mutationLogin } from "./Mutation";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();

    const { mutateAsync } = useMutation({
        mutationKey: ['login'],
        mutationFn: mutationLogin,
    });

    const handleLogin = async () => {
        try {
            const response = await mutateAsync(); // response now contains the data
            localStorage.setItem('guest_session_id', response.guest_session_id);
            navigate('/');
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <Grid textAlign="center" verticalAlign="middle" style={{ height: '100vh' }}>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color="violet" textAlign="center">
                    Welcome! Login as a Guest Below.
                </Header>

                <Form size='large'>
                    <Segment stacked>
                        <Button color="violet" size='large' fluid onClick={handleLogin}>
                            Login
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default Auth;
