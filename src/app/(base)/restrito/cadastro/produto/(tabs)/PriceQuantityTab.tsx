import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, MenuItem } from '@mui/material';
import { NumericFormat, NumberFormatValues, SourceInfo } from 'react-number-format';

interface NumberFormatCustomProps {
  inputRef: (instance: HTMLInputElement | null) => void;
  name: string;
  onChange: (event: { target: { name: string; value: string } }) => void;
}

const NumberFormatCustom = React.forwardRef<HTMLInputElement, NumberFormatCustomProps>((props, ref) => {
  const { onChange, ...other } = props;
  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values: NumberFormatValues, sourceInfo: SourceInfo) => {
        props.onChange({
          target: {
            name: props.name,
            value: values.floatValue !== undefined ? values.floatValue.toString() : '',
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      valueIsNumericString
    />
  );
});

const PriceQuantityTab: React.FC = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div>
      <Controller
        name="salePrice"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Preço de Venda"
            fullWidth
            margin="normal"
            InputProps={{
              inputComponent: NumberFormatCustom as any,
            }}
            error={!!errors.salePrice}
            helperText={errors.salePrice?.message as string}
          />
        )}
      />
      <Controller
        name="costPrice"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Preço de Custo"
            fullWidth
            margin="normal"
            InputProps={{
              inputComponent: NumberFormatCustom as any,
            }}
            error={!!errors.costPrice}
            helperText={errors.costPrice?.message as string}
          />
        )}
      />
      <Controller
        name="stockQuantity"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Quantidade em Estoque" type="number" fullWidth margin="normal" error={!!errors.stockQuantity} helperText={errors.stockQuantity?.message as string} />}
      />
      <Controller
        name="unit"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Unidade de Medida" select fullWidth margin="normal" error={!!errors.unit} helperText={errors.unit?.message as string}>
            <MenuItem value="unidade">Unidade</MenuItem>
            <MenuItem value="kg">Kg</MenuItem>
            <MenuItem value="litro">Litro</MenuItem>
            {/* Adicione mais opções conforme necessário */}
          </TextField>
        )}
      />
    </div>
  );
};

export default PriceQuantityTab;
