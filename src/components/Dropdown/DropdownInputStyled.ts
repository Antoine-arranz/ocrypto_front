import styled from '@emotion/styled';
import { Dropdown } from 'semantic-ui-react';

export const InputWrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const DropdownCustom = styled(Dropdown)(({ props }: any) => ({
  borderRadius: '10px !important',
  border: '1px solid rgb(204, 204, 204) !important',
}));
