import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {postJson} from '@fay-react/lib/fetch';
import {BASE_URL} from '@/env';

export default ({id, open, onClose}: any) => {

  const [state, setState] = React.useState({oldPassword: '', password: '', againPassword: ''});

  const handleConfirm = () => {
    const data = {
      ...state,
      id
    }
    postJson({path: BASE_URL+'/manager/updPassword', data}).then(res => {
      if(res.success){
        alert('更新成功');
        onClose();
      }else{
        alert(res.err || '更新失败');
      }
    })
  }

  const handleChange = (key: string) => (e: any) => {
    setState({...state, [key]: e.target.value});
  }

  const canSubmit = state.oldPassword.length>0 && state.password.length>0 && state.password === state.againPassword;
  const againError = state.againPassword.length>0 && state.password !== state.againPassword;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle id="form-dialog-title">编辑TDK</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="旧密码"
          fullWidth
          value={state.oldPassword}
          type='password'
          onChange={handleChange('oldPassword')}
        />
        <TextField
          margin="dense"
          label="新密码"
          fullWidth
          type='password'
          value={state.password}
          onChange={handleChange('password')}
        />
        <TextField
          margin="dense"
          label="再次确认"
          error={againError}
          type='password'
          helperText={againError?'两次输入不一致':''}
          fullWidth
          value={state.againPassword}
          onChange={handleChange('againPassword')}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          取消
        </Button>
        <Button disabled={!canSubmit} onClick={handleConfirm} color="primary">
          确认
        </Button>
      </DialogActions>
    </Dialog>
  );
}
