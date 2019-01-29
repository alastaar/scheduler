function hasPermission(user, permissionsNeeded) {
  const matchedPermissions = user.permissions.filter(permissionTheyHave =>
    permissionsNeeded.includes(permissionTheyHave)
  );
  if (!matchedPermissions.length) {
    throw new Error(`You do not have sufficient permissions

      : ${permissionsNeeded}

      You Have:

      ${user.permissions}
      `);
  }
}

function hasPreference(user, permissionsNeeded) {
  const matchedPreferences = user.emailPreference.filter(preferenceTheyHave =>
    preferenceNeeded.includes(preferenceTheyHave)
  );
  if (!matchedPreferences.length) {
    throw new Error(`You do not have sufficient permissions

      : ${preferenceNeeded}

      You Have:

      ${user.emailPreference}
      `);
  }
}

exports.hasPreference = hasPreference;
exports.hasPermission = hasPermission;
