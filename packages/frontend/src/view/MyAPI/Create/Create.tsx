import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import {
  HugeWidget,
  Input,
  PrimaryButton,
  WidgetBody,
  WidgetHeader,
  WidgetRow,
} from '../../../ui';
import { useFormErrors } from '../../../model/Hooks';
import { useCreateApiDef } from '../../../model/ApiDefs/commands';

export const CreateApi: React.FC = () => {
  const { handleSubmit, control, errors } = useForm();
  const { createApiDef } = useCreateApiDef();
  const onSubmit = (data: any) => {
    console.log(data);
    createApiDef({
      variables: {
        apiDef: {
          name: data.name,
          endpoint: data.endpoint,
        },
        sources: [],
      },
    });
  };

  useFormErrors(errors);

  return (
    <>
      <Helmet>
        <title>Create a new GraphQL API</title>
      </Helmet>
      <WidgetRow>
        <HugeWidget>
          <WidgetHeader title="Create a new GraphQL API">
            <PrimaryButton disabled={true}>Create API</PrimaryButton>
          </WidgetHeader>
          <WidgetBody>
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                as={Input}
                label="GraphQL API Name"
                control={control}
                required
                name="name"
                fullWidth
              />
              <Controller
                as={Input}
                control={control}
                label="API endpoint"
                name="endpoint"
                required
                helperText="Relative API path, for example: /graphql"
                fullWidth
              />
              <PrimaryButton type="submit">Create API</PrimaryButton>
            </form>
          </WidgetBody>
        </HugeWidget>
      </WidgetRow>
    </>
  );
};
