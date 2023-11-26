import styled from '@emotion/styled';
import { Search } from '@mui/icons-material';
import { Button, IconButton, TextField, Theme } from '@mui/material';
import { FC } from 'react';

interface SearchFormProps {
  textfieldlabel?: string;
  buttonlabel?: string;
  theme?: Theme;
  onlyicon?: boolean;
}

export const StyledSearchForm: FC<SearchFormProps> = ({
  textfieldlabel = 'Keywords',
  buttonlabel = 'Search',
  onlyicon = false,
  ...props
}: SearchFormProps) => {
  return (
    <form {...props}>
      <div className='invertcolors'>
        {onlyicon ? (
          <IconButton className='onlyicon'>
            <Search />
          </IconButton>
        ) : (
          <>
            <TextField label={textfieldlabel}></TextField>
            <Button variant='contained'>{buttonlabel}</Button>
          </>
        )}
      </div>
    </form>
  );
};

export const SearchForm = styled(StyledSearchForm)`
  width: fit-content;
  width: -moz-fit-content;
  padding-left: 4em;
  div {
    display: flex;
    align-items: center;
    gap: 1em;
    height: 100%;
    display: flex;
    width: auto;
  }
  .invertcolors input {
    color: ${(props) => props.theme.palette.background.paper};
  }
  .invertcolors fieldset {
    border-color: ${(props) => props.theme.palette.background.paper}!important;
  }
  .invertcolors label {
    color: ${(props) => props.theme.palette.background.paper}!important;
  }
  .invertcolors button {
    background-color: ${(props) =>
      props.theme.palette.background.paper}!important;
    color: ${(props) => props.theme.palette.text.primary};
  }
  .invertcolors .onlyicon {
    background-color: ${(props) => props.theme.palette.text.primary}!important;
  }
  .invertcolors .onlyicon svg path {
    fill: ${(props) => props.theme.palette.background.paper}!important;
  }

  input,
  button {
    height: 40px;
    box-sizing: border-box;
  }
  input {
    padding: 0.5em 1em;
  }
  label {
    top: -0.5em;
  }
  label[data-shrink='true'] {
    top: 0;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    .onlyicon {
      position: absolute;
      right: 3em;
    }
  }
`;
