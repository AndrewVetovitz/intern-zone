import * as React from 'react';

// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Button } from '@material-ui/core';

import { WithStyles, withStyles, createStyles } from '@material-ui/core/styles';

import ModalEnum from '../Modal.enum';

import GoogleSignUp from '../../Google/GoogleSignUp';
import FacebookSignUp from '../../Facebook/FacebookSignUp';
import GithubSignUp from '../../Github/GithubSignUp';
import LinkedlnSignUp from '../../Linkedln/LinkedlnSignUp';
import SignUp from '../../SignUp/SignUp';

const styles = () => createStyles({
    margin: {
        margin: '0 25px',
    }
});

interface SignUpProps extends WithStyles<typeof styles> {
    setModalContent: (state: ModalEnum) => any;
}

class SignUpModal extends React.Component<SignUpProps> {
    constructor(props: SignUpProps) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.margin}>
                    <DialogTitle style={{textAlign: 'center'}} id="scroll-dialog-title">Create your own personalized Intern-Zone profile</DialogTitle>

                    <DialogContent>
                        <GoogleSignUp/>
                    </DialogContent>
                    <DialogContent>
                        <FacebookSignUp/>
                    </DialogContent>
                    <DialogContent>
                        <LinkedlnSignUp/>
                    </DialogContent>
                    <DialogContent>
                        <GithubSignUp/>
                    </DialogContent>
                    <DialogContent>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            Or
                        </div> 
                    </DialogContent>
                    <DialogContent>
                        <SignUp/>
                    </DialogContent>
                </div>
                <DialogContent>
                        <Button onClick={() => this.props.setModalContent(ModalEnum.LOGIN)} color="primary">
                            Login
                        </Button>
                    </DialogContent>
            </React.Fragment>
            
        ); 
    }
}

export default withStyles(styles)(SignUpModal);
