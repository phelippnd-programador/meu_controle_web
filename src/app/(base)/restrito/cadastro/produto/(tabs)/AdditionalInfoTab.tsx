import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Box } from '@mui/material';

const AdditionalInfoTab = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div>
      <Controller
        name="grossWeight"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Peso Bruto (kg)" type="number" fullWidth margin="normal" error={!!errors.grossWeight} helperText={errors.grossWeight?.message as string} />}
      />
      <Controller
        name="netWeight"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Peso Líquido (kg)" type="number" fullWidth margin="normal" error={!!errors.netWeight} helperText={errors.netWeight?.message as string} />}
      />
      <Box display="flex" gap={2}>
        <Controller
          name="dimensions.height"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Altura (cm)" type="number" fullWidth margin="normal" error={!!errors.dimensions?.height} helperText={errors.dimensions?.height?.message as string} />}
        />
        <Controller
          name="dimensions.width"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Largura (cm)" type="number" fullWidth margin="normal" error={!!errors.dimensions?.width} helperText={errors.dimensions?.width?.message as string} />}
        />
        <Controller
          name="dimensions.depth"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField {...field} label="Profundidade (cm)" type="number" fullWidth margin="normal" error={!!errors.dimensions?.depth} helperText={errors.dimensions?.depth?.message as string} />}
        />
      </Box>
    </div>
  );
};

export default AdditionalInfoTab;
