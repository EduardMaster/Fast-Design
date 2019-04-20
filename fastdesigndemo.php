<?php
echo "<style>\n";
for($id = 1; $id<=5;$id++){
  echo ".padding-left-$id\n{\npadding-left: $id"."rem;\n}";
}
for($id = 1; $id<=5;$id++){
  echo ".padding-top-$id\n{\npadding-top: $id"."rem;\n}\n";
}
for($id = 1; $id<=5;$id++){
  echo ".padding-right-$id\n{\npadding-right: $id"."rem;\n}\n";
}
for($id = 1; $id<=5;$id++){
  echo ".padding-bottom-$id\n{\npadding-bottom: $id"."rem;\n}\n";
}
echo "</style>";
 ?>
