// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("rescript/lib/js/belt_Array.js");

function mockDEFAULT_ADMIN_ROLEToReturn(_r, _param0) {
  ((_r.smocked.DEFAULT_ADMIN_ROLE.will.return.with([_param0])));
  
}

function dEFAULT_ADMIN_ROLECalls(_r) {
  var array = _r.smocked.DEFAULT_ADMIN_ROLE.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockMINTER_ROLEToReturn(_r, _param0) {
  ((_r.smocked.MINTER_ROLE.will.return.with([_param0])));
  
}

function mINTER_ROLECalls(_r) {
  var array = _r.smocked.MINTER_ROLE.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockPAUSER_ROLEToReturn(_r, _param0) {
  ((_r.smocked.PAUSER_ROLE.will.return.with([_param0])));
  
}

function pAUSER_ROLECalls(_r) {
  var array = _r.smocked.PAUSER_ROLE.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockAllowanceToReturn(_r, _param0) {
  ((_r.smocked.allowance.will.return.with([_param0])));
  
}

function allowanceCalls(_r) {
  var array = _r.smocked.allowance.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        owner: param[0],
                        spender: param[1]
                      };
              }));
}

function mockApproveToReturn(_r, _param0) {
  ((_r.smocked.approve.will.return.with([_param0])));
  
}

function approveCalls(_r) {
  var array = _r.smocked.approve.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        spender: param[0],
                        amount: param[1]
                      };
              }));
}

function mockBalanceOfToReturn(_r, _param0) {
  ((_r.smocked.balanceOf.will.return.with([_param0])));
  
}

function balanceOfCalls(_r) {
  var array = _r.smocked.balanceOf.calls;
  return Belt_Array.map(array, (function (_m) {
                var account = _m[0];
                return {
                        account: account
                      };
              }));
}

function mockBurnToReturn(_r) {
  ((_r.smocked.burn.will.return()));
  
}

function burnCalls(_r) {
  var array = _r.smocked.burn.calls;
  return Belt_Array.map(array, (function (_m) {
                var amount = _m[0];
                return {
                        amount: amount
                      };
              }));
}

function mockBurnFromToReturn(_r) {
  ((_r.smocked.burnFrom.will.return()));
  
}

function burnFromCalls(_r) {
  var array = _r.smocked.burnFrom.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        account: param[0],
                        amount: param[1]
                      };
              }));
}

function mockDecimalsToReturn(_r, _param0) {
  ((_r.smocked.decimals.will.return.with([_param0])));
  
}

function decimalsCalls(_r) {
  var array = _r.smocked.decimals.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockDecreaseAllowanceToReturn(_r, _param0) {
  ((_r.smocked.decreaseAllowance.will.return.with([_param0])));
  
}

function decreaseAllowanceCalls(_r) {
  var array = _r.smocked.decreaseAllowance.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        spender: param[0],
                        subtractedValue: param[1]
                      };
              }));
}

function mockGetRoleAdminToReturn(_r, _param0) {
  ((_r.smocked.getRoleAdmin.will.return.with([_param0])));
  
}

function getRoleAdminCalls(_r) {
  var array = _r.smocked.getRoleAdmin.calls;
  return Belt_Array.map(array, (function (_m) {
                var role = _m[0];
                return {
                        role: role
                      };
              }));
}

function mockGetRoleMemberToReturn(_r, _param0) {
  ((_r.smocked.getRoleMember.will.return.with([_param0])));
  
}

function getRoleMemberCalls(_r) {
  var array = _r.smocked.getRoleMember.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        role: param[0],
                        index: param[1]
                      };
              }));
}

function mockGetRoleMemberCountToReturn(_r, _param0) {
  ((_r.smocked.getRoleMemberCount.will.return.with([_param0])));
  
}

function getRoleMemberCountCalls(_r) {
  var array = _r.smocked.getRoleMemberCount.calls;
  return Belt_Array.map(array, (function (_m) {
                var role = _m[0];
                return {
                        role: role
                      };
              }));
}

function mockGrantRoleToReturn(_r) {
  ((_r.smocked.grantRole.will.return()));
  
}

function grantRoleCalls(_r) {
  var array = _r.smocked.grantRole.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        role: param[0],
                        account: param[1]
                      };
              }));
}

function mockHasRoleToReturn(_r, _param0) {
  ((_r.smocked.hasRole.will.return.with([_param0])));
  
}

function hasRoleCalls(_r) {
  var array = _r.smocked.hasRole.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        role: param[0],
                        account: param[1]
                      };
              }));
}

function mockIncreaseAllowanceToReturn(_r, _param0) {
  ((_r.smocked.increaseAllowance.will.return.with([_param0])));
  
}

function increaseAllowanceCalls(_r) {
  var array = _r.smocked.increaseAllowance.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        spender: param[0],
                        addedValue: param[1]
                      };
              }));
}

function mockIsLongToReturn(_r, _param0) {
  ((_r.smocked.isLong.will.return.with([_param0])));
  
}

function isLongCalls(_r) {
  var array = _r.smocked.isLong.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockLongShortToReturn(_r, _param0) {
  ((_r.smocked.longShort.will.return.with([_param0])));
  
}

function longShortCalls(_r) {
  var array = _r.smocked.longShort.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockMarketIndexToReturn(_r, _param0) {
  ((_r.smocked.marketIndex.will.return.with([_param0])));
  
}

function marketIndexCalls(_r) {
  var array = _r.smocked.marketIndex.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockMintToReturn(_r) {
  ((_r.smocked.mint.will.return()));
  
}

function mintCalls(_r) {
  var array = _r.smocked.mint.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        _to: param[0],
                        amount: param[1]
                      };
              }));
}

function mockNameToReturn(_r, _param0) {
  ((_r.smocked.name.will.return.with([_param0])));
  
}

function nameCalls(_r) {
  var array = _r.smocked.name.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockPauseToReturn(_r) {
  ((_r.smocked.pause.will.return()));
  
}

function pauseCalls(_r) {
  var array = _r.smocked.pause.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockPausedToReturn(_r, _param0) {
  ((_r.smocked.paused.will.return.with([_param0])));
  
}

function pausedCalls(_r) {
  var array = _r.smocked.paused.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockRenounceRoleToReturn(_r) {
  ((_r.smocked.renounceRole.will.return()));
  
}

function renounceRoleCalls(_r) {
  var array = _r.smocked.renounceRole.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        role: param[0],
                        account: param[1]
                      };
              }));
}

function mockRevokeRoleToReturn(_r) {
  ((_r.smocked.revokeRole.will.return()));
  
}

function revokeRoleCalls(_r) {
  var array = _r.smocked.revokeRole.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        role: param[0],
                        account: param[1]
                      };
              }));
}

function mockStakeToReturn(_r) {
  ((_r.smocked.stake.will.return()));
  
}

function stakeCalls(_r) {
  var array = _r.smocked.stake.calls;
  return Belt_Array.map(array, (function (_m) {
                var amount = _m[0];
                return {
                        amount: amount
                      };
              }));
}

function mockStakerToReturn(_r, _param0) {
  ((_r.smocked.staker.will.return.with([_param0])));
  
}

function stakerCalls(_r) {
  var array = _r.smocked.staker.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockSupportsInterfaceToReturn(_r, _param0) {
  ((_r.smocked.supportsInterface.will.return.with([_param0])));
  
}

function supportsInterfaceCalls(_r) {
  var array = _r.smocked.supportsInterface.calls;
  return Belt_Array.map(array, (function (_m) {
                var interfaceId = _m[0];
                return {
                        interfaceId: interfaceId
                      };
              }));
}

function mockSymbolToReturn(_r, _param0) {
  ((_r.smocked.symbol.will.return.with([_param0])));
  
}

function symbolCalls(_r) {
  var array = _r.smocked.symbol.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockTotalSupplyToReturn(_r, _param0) {
  ((_r.smocked.totalSupply.will.return.with([_param0])));
  
}

function totalSupplyCalls(_r) {
  var array = _r.smocked.totalSupply.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

function mockTransferToReturn(_r, _param0) {
  ((_r.smocked.transfer.will.return.with([_param0])));
  
}

function transferCalls(_r) {
  var array = _r.smocked.transfer.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        recipient: param[0],
                        amount: param[1]
                      };
              }));
}

function mockTransferFromToReturn(_r, _param0) {
  ((_r.smocked.transferFrom.will.return.with([_param0])));
  
}

function transferFromCalls(_r) {
  var array = _r.smocked.transferFrom.calls;
  return Belt_Array.map(array, (function (param) {
                return {
                        sender: param[0],
                        recipient: param[1],
                        amount: param[2]
                      };
              }));
}

function mockUnpauseToReturn(_r) {
  ((_r.smocked.unpause.will.return()));
  
}

function unpauseCalls(_r) {
  var array = _r.smocked.unpause.calls;
  return Belt_Array.map(array, (function (param) {
                
              }));
}

var uninitializedValue;

exports.uninitializedValue = uninitializedValue;
exports.mockDEFAULT_ADMIN_ROLEToReturn = mockDEFAULT_ADMIN_ROLEToReturn;
exports.dEFAULT_ADMIN_ROLECalls = dEFAULT_ADMIN_ROLECalls;
exports.mockMINTER_ROLEToReturn = mockMINTER_ROLEToReturn;
exports.mINTER_ROLECalls = mINTER_ROLECalls;
exports.mockPAUSER_ROLEToReturn = mockPAUSER_ROLEToReturn;
exports.pAUSER_ROLECalls = pAUSER_ROLECalls;
exports.mockAllowanceToReturn = mockAllowanceToReturn;
exports.allowanceCalls = allowanceCalls;
exports.mockApproveToReturn = mockApproveToReturn;
exports.approveCalls = approveCalls;
exports.mockBalanceOfToReturn = mockBalanceOfToReturn;
exports.balanceOfCalls = balanceOfCalls;
exports.mockBurnToReturn = mockBurnToReturn;
exports.burnCalls = burnCalls;
exports.mockBurnFromToReturn = mockBurnFromToReturn;
exports.burnFromCalls = burnFromCalls;
exports.mockDecimalsToReturn = mockDecimalsToReturn;
exports.decimalsCalls = decimalsCalls;
exports.mockDecreaseAllowanceToReturn = mockDecreaseAllowanceToReturn;
exports.decreaseAllowanceCalls = decreaseAllowanceCalls;
exports.mockGetRoleAdminToReturn = mockGetRoleAdminToReturn;
exports.getRoleAdminCalls = getRoleAdminCalls;
exports.mockGetRoleMemberToReturn = mockGetRoleMemberToReturn;
exports.getRoleMemberCalls = getRoleMemberCalls;
exports.mockGetRoleMemberCountToReturn = mockGetRoleMemberCountToReturn;
exports.getRoleMemberCountCalls = getRoleMemberCountCalls;
exports.mockGrantRoleToReturn = mockGrantRoleToReturn;
exports.grantRoleCalls = grantRoleCalls;
exports.mockHasRoleToReturn = mockHasRoleToReturn;
exports.hasRoleCalls = hasRoleCalls;
exports.mockIncreaseAllowanceToReturn = mockIncreaseAllowanceToReturn;
exports.increaseAllowanceCalls = increaseAllowanceCalls;
exports.mockIsLongToReturn = mockIsLongToReturn;
exports.isLongCalls = isLongCalls;
exports.mockLongShortToReturn = mockLongShortToReturn;
exports.longShortCalls = longShortCalls;
exports.mockMarketIndexToReturn = mockMarketIndexToReturn;
exports.marketIndexCalls = marketIndexCalls;
exports.mockMintToReturn = mockMintToReturn;
exports.mintCalls = mintCalls;
exports.mockNameToReturn = mockNameToReturn;
exports.nameCalls = nameCalls;
exports.mockPauseToReturn = mockPauseToReturn;
exports.pauseCalls = pauseCalls;
exports.mockPausedToReturn = mockPausedToReturn;
exports.pausedCalls = pausedCalls;
exports.mockRenounceRoleToReturn = mockRenounceRoleToReturn;
exports.renounceRoleCalls = renounceRoleCalls;
exports.mockRevokeRoleToReturn = mockRevokeRoleToReturn;
exports.revokeRoleCalls = revokeRoleCalls;
exports.mockStakeToReturn = mockStakeToReturn;
exports.stakeCalls = stakeCalls;
exports.mockStakerToReturn = mockStakerToReturn;
exports.stakerCalls = stakerCalls;
exports.mockSupportsInterfaceToReturn = mockSupportsInterfaceToReturn;
exports.supportsInterfaceCalls = supportsInterfaceCalls;
exports.mockSymbolToReturn = mockSymbolToReturn;
exports.symbolCalls = symbolCalls;
exports.mockTotalSupplyToReturn = mockTotalSupplyToReturn;
exports.totalSupplyCalls = totalSupplyCalls;
exports.mockTransferToReturn = mockTransferToReturn;
exports.transferCalls = transferCalls;
exports.mockTransferFromToReturn = mockTransferFromToReturn;
exports.transferFromCalls = transferFromCalls;
exports.mockUnpauseToReturn = mockUnpauseToReturn;
exports.unpauseCalls = unpauseCalls;
/* No side effect */
