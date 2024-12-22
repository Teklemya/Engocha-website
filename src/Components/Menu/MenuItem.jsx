import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import PropTypes from 'prop-types';

const MenuItem = ({ name, description, imageSrc }) => {
  return (
    <Card className="overflow-hidden">
      <img
        src={imageSrc}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default MenuItem;

