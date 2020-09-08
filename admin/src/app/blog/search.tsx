import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@/components/text-field";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {SearchStateType} from './index';
import {PATH_PREFIX} from '@/env';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(2, 0),
    backgroundColor: theme.palette.background.default
  },
  btn: {
    height: 40,
    marginLeft: theme.spacing(2)
  }
}));

interface Props{
  onSearch: (args: SearchStateType) => void
}

export default ({onSearch}: Props) => {
  const classes = useStyles();
  const initState = {searchKeywords: ''};
  const [state, setState] = React.useState<SearchStateType>(initState);

  const handleChange = (key: string) => (e: any) => {
    setState({...state, [key]: e.target.value})
  }

  const handleSearch = () => {
    onSearch(state);
  }

  const handleReset = () => {
    onSearch(initState);
  }

  const handleEdit = () => {
    window.open(PATH_PREFIX+'/blog/edit');
  }

  return (
    <Paper className={classes.root} elevation={0}>
      <Grid container item alignItems={"center"}>
        <TextField
          label="搜索"
          size={"small"}
          value={state.searchKeywords}
          onChange={handleChange('orderNo')}
        />
        <Button className={classes.btn} variant={"contained"} color={"primary"} onClick={handleSearch}>查询</Button>
        <Button className={classes.btn} variant={"contained"} onClick={handleEdit}>添加</Button>
        <Button className={classes.btn} variant={"contained"} onClick={handleReset}>重置</Button>
      </Grid>
    </Paper>
  )
}
